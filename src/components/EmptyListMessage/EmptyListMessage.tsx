import React from 'react';

import {
  EmptyIcon,
  EmptyMessageContainer,
  EmptyText,
} from './EmptyListMessage.styles';

interface Props {
  iconName: string;
  message: string;
}

export default function EmptyListMessage({ iconName, message }: Props) {
  return (
    <EmptyMessageContainer>
      <EmptyIcon name={iconName} />
      <EmptyText>{message}</EmptyText>
    </EmptyMessageContainer>
  );
}
