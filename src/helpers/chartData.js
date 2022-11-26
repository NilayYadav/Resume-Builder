export function matchSkills(jobRequirements, userSkills) {
  const skillsMatched = jobRequirements.filter((skill) =>
    userSkills.includes(skill)
  );

  const numberOfSkillMatched = skillsMatched.length;
  const nunberOfSkillsLack = jobRequirements.length - numberOfSkillMatched;

  return [numberOfSkillMatched, nunberOfSkillsLack];
}
