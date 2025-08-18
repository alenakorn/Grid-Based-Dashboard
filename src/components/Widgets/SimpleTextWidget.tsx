import { SimpleTextData } from '../../types/dashboard';

const SimpleTextWidget = ({ name, description }: SimpleTextData) => {
  return (
    <div>
      {name && <h2>{name}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default SimpleTextWidget;
