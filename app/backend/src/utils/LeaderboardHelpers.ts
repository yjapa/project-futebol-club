const query = `
  SELECT
  cl.club_name AS name,
      SUM(IF(mtc.home_team_goals > mtc.away_team_goals, 3,
        IF(mtc.home_team_goals < mtc.away_team_goals, 0, 1))) AS totalPoints,
    COUNT(cl.club_name) AS totalGames,
    SUM(IF(mtc.home_team_goals > mtc.away_team_goals, 1, 0)) AS totalVictories,
    SUM(IF(mtc.home_team_goals = mtc.away_team_goals, 1, 0)) AS totalDraws,
    SUM(IF(mtc.home_team_goals < mtc.away_team_goals, 1, 0)) AS totalLosses,
    SUM(mtc.home_team_goals) AS goalsFavor,
    SUM(mtc.away_team_goals) AS goalsOwn,
    SUM(mtc.home_team_goals) - SUM(mtc.away_team_goals) AS goalsBalance,
    TRIM(ROUND(SUM(IF(mtc.home_team_goals > mtc.away_team_goals, 3,
      IF(mtc.home_team_goals < mtc.away_team_goals, 0,1)))
      / (COUNT(cl.club_name) * 3) * 100, 2)) + 0 AS efficiency
  FROM clubs AS cl
  INNER JOIN matchs AS mtc ON cl.id = mtc.home_team
  GROUP BY cl.club_name, mtc.in_progress
  HAVING mtc.in_progress = 0
  ORDER BY
    totalPoints DESC ,
    totalVictories DESC ,
    goalsBalance DESC ,
    goalsFavor DESC ,
    goalsOwn DESC;
`;

export default query;
