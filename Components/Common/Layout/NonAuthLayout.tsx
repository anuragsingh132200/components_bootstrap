import React from 'react';
import { ReactNode } from 'react'

export type NonAuthLayoutProps = {
    children: ReactNode
  }

  
const NonAuthLayout = ({children} : NonAuthLayoutProps) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default NonAuthLayout;