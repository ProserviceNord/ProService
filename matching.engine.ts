
export class MatchingEngine {

  score(candidate, job) {
    const skillMatch = candidate.skills.filter(s =>
      job.requiredSkills.includes(s)
    ).length / job.requiredSkills.length;

    const availability = candidate.available ? 0.2 : 0;

    return skillMatch * 0.7 + availability;
  }

  rank(candidates, job) {
    return candidates
      .map(c => ({ ...c, score: this.score(c, job) }))
      .sort((a, b) => b.score - a.score);
  }
}
