{
  description = "PSU Flake NIX";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    android-nixpkgs.url = "github:tadfisher/android-nixpkgs";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ ];
      systems = [ "aarch64-darwin" "x86_64-darwin" "x86_64-linux" ];
      perSystem =
        { config, self', inputs', pkgs, system, android-nixpkgs, ... }: {

          packages.systems = android-nixpkgs.sdk (sdkPkgs:
            with sdkPkgs; [
              cmdline-tools-latest
              build-tools-34-0-0
              platform-tools
              platforms-android-34
              emulator
            ]);

          devShells.default = pkgs.mkShell {
            buildInputs = [
              pkgs.gnused
              pkgs.yarn
              pkgs.bun
              pkgs.docker
              pkgs.nodejs
              pkgs.emmet-ls
              pkgs.nodePackages.node-gyp-build
              pkgs.nodePackages.npm
              pkgs.nodePackages.pnpm
              pkgs.nodePackages."dockerfile-language-server-nodejs"
              pkgs.nodePackages."typescript"
              pkgs.nodePackages."typescript-language-server"
              pkgs.nodePackages."vscode-langservers-extracted"
              pkgs.nodePackages."@tailwindcss/language-server"
            ];

          };
        };
      flake = { };
    };
}
