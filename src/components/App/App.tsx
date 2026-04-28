import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });


function handleVote(type: VoteType) {
  setVotes(prev => ({
    ...prev,
    [type]: prev[type] + 1,
  }));
}

function resetVotes() {
  setVotes({
    good: 0,
    neutral: 0,
    bad: 0,
  });
}

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
      onVote={handleVote}
      onReset={resetVotes}
      canReset={true}
    />
    </div>
  );
}




export default App;

