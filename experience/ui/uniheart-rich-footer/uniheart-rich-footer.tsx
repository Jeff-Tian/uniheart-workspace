import React, { ReactNode } from 'react';

export type UniheartRichFooterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function UniheartRichFooter({ children }: UniheartRichFooterProps) {
  return (
    <div>
      {children}
    </div>
  );
}
