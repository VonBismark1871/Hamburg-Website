import PropertyExposePage from '../../../../../components/references/immobilien-demo/PropertyExposePage';
import { exposeData } from '../../../../../components/references/immobilien-demo/exposeData';

export default function PenthouseExposePage() {
  return (
    <PropertyExposePage
      path="/referenzen/immobilien-demo/objekte/penthouse-hamburg"
      content={exposeData['penthouse-hamburg']}
    />
  );
}
