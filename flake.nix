{
  description = "PSU SuperApp Nix Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    android-nixpkgs = {
      url = "github:tadfisher/android-nixpkgs";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, android-nixpkgs, pkgs }: {
    packages.x86_64-linux.android-sdk = android-nixpkgs.sdk (sdkPkgs:
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
        pkgs.nodePackages.node-gyp-build
        pkgs.nodePackages.npm
        pkgs.nodePackages.pnpm
        pkgs.nodePackages."dockerfile-language-server-nodejs"
        pkgs.nodePackages."typescript"
        pkgs.nodePackages."typescript-language-server"
        pkgs.nodePackages."vscode-langservers-extracted"
      ];

    };
  };

}
