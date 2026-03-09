import PropertyExposePage from '../../../../../components/references/immobilien-demo/PropertyExposePage';
import { exposeData } from '../../../../../components/references/immobilien-demo/exposeData';

export default function PropertyPage() {
  return <PropertyExposePage path="/referenzen/immobilien-demo/objekte/familienhaus-volksdorf" content={exposeData['familienhaus-volksdorf']} />;
}
