import { memo } from 'react';

import { SimpleTextData } from '../../types/dashboard';

const SimpleTextWidget = ({ name, description }: SimpleTextData) => {
  return (
    <>
      {name && <h2>{name}</h2>}
      {description && <p>{description}</p>}
    </>
  );
};

export default memo(SimpleTextWidget);
