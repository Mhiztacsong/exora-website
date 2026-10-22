import { ExecuteHero } from "@/components/execute/ExecuteHero";
import { ExecuteChallenge } from "@/components/execute/ExecuteChallenge";
import { ExecuteAudience} from "@/components/execute/ExecuteAudience";
import { ExecuteReceive } from "@/components/execute/ExecuteReceive";
import { ExecuteProcess } from "@/components/execute/ExecuteProcess";
import { ExecuteApproach } from "@/components/execute/ExecuteApproach";

export default function ExecutePage() {
  return (
    <main>
      <ExecuteHero />
      <ExecuteChallenge />
      <ExecuteAudience />
      <ExecuteReceive />
      <ExecuteProcess />
      <ExecuteApproach />  
    </main>
  );
}
