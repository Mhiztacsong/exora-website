import { VisibilityHero } from "@/components/visibility/VisibilityHero";
import { VisibilityChallenge} from "@/components/visibility/VisibilityChallenge";
import { VisibilityAudience } from "@/components/visibility/VisibilityAudience";
import { VisibilityOffer } from "@/components/visibility/VisibilityOffer";
import { VisibilityPackage } from "@/components/visibility/VisibilityPackage";
import { VisibilityAdditionalSupport } from "@/components/visibility/VisibilityAdditionalSupport";
import { VisibilityProcess } from "@/components/visibility/VisibilityProcess";
import { VisibilityFAQs } from "@/components/visibility/VisibilityFAQs";
import { VisibilityEnquire } from "@/components/visibility/VisibilityEnquire";

export default function VisibilityPage() {
  return (
    <main>
      <VisibilityHero />
      <VisibilityChallenge />
      <VisibilityAudience />
      <VisibilityOffer />
      <VisibilityPackage />
      <VisibilityAdditionalSupport />
      <VisibilityProcess />
      <VisibilityFAQs />
      <VisibilityEnquire />
    </main>
  );
}
