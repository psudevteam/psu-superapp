import { FC, PropsWithChildren, ReactElement } from 'react';
import './global.css';
import { QueryProvider } from '@psu-superapp/web-services';

export const metadata = {
  title: 'PSU Superapp',
  description: 'PSU Superapp adalah',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout: FC<PropsWithChildren> = (props): ReactElement => {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{props.children}</QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
