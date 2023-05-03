import axios from "axios";

export async function getCricketScore(matchID) {
  let obj = {};
  try {
    let { data } = await axios.get(
      "https://testing-nine-theta.vercel.app/score?url=https://www.cricbuzz.com/live-cricket-scores/" +
        matchID
    );

    if (typeof data === "string") {
      console.log(data);
      obj.message = data + "\nCheck the match ID in description!!";
      obj.info = "ER";
      return obj;
    }

    let title = data.title;
    title = title.slice(0, title.search(","));
    let score = data.current;
    let runrate = data.runrate;
    let lastwicket = data.lastwicket;
    let recentballs = data.recentballs;
    let currentBatsman = data.batsman.slice(0, -1);
    let bowler = data.bowler;
    let bowlerover = data.bowlerover;
    let bowlerruns = data.bowlerruns;
    let bowlerwickets = data.bowlerwickets;
    if (recentballs === "Data Not Found") recentballs = data.lastwicket;

    let d = await axios.get(
      "https://cric-score.skdev.one/scorecard/" + matchID
    );
    data = d.data;

    let batsman1 = "out ho gaya",
      batsman2 = "out ho gaya";
    let currentInning;
    let alt = true;
    let firstInningRuns, firstInningTeam;
    let update = data["result"]["update"];
    let message = "";

    let isMatchStarted = false;
    if (Object.keys(data.Innings1[2]).length !== 0) isMatchStarted = true;
    if (!isMatchStarted) {
      //title and update only
      message += `*${title}*\n`;
      message += `\n${update}`;
      obj.message = message;
      return obj;
    }

    if (Object.keys(data.Innings2[2]).length === 0) {
      currentInning = "Innings1";
    } else {
      currentInning = "Innings2";
      firstInningRuns = data.Innings1[2].runs + "/" + data.Innings1[2].wickets;
      firstInningTeam = data.Innings1[2].team
        .match(/(\b\S)?/g)
        .join("")
        .toUpperCase();
      if (firstInningTeam.length <= 1) firstInningTeam = data.Innings1[2].team;
    }

    let isInningOver = false;

    //inning over or not
    if (update === "innings break") {
      obj.info = "IO";
      isInningOver = true;
    }

    //find playing 2 batsman
    data[currentInning][0]["Batsman"].forEach((batsman) => {
      if (batsman.dismissal === "batting") {
        if (alt) {
          let batsmanName = batsman.name;
          if (batsmanName.search(/\(/) !== -1) {
            batsmanName = batsmanName.slice(0, batsmanName.search(/\(/) - 1);
          }
          batsmanName += batsmanName === currentBatsman ? "*" : ""; //add * to playing batmsan
          batsman1 = `${batsmanName}: ${batsman.runs} (${batsman.balls})`;
          alt = false;
        } else {
          let batsmanName = batsman.name;
          if (batsmanName.search(/\(/) !== -1) {
            batsmanName = batsmanName.slice(0, batsmanName.search(/\(/) - 1);
          }
          batsmanName += batsmanName === currentBatsman ? "*" : ""; //add * to playing batmsan
          batsman2 = `${batsmanName}: ${batsman.runs} (${batsman.balls})`;
        }
      }
    });

    //is match over?
    if (data["result"]["winning_team"] !== "Not Completed") {
      obj.info = "MO";
    }

    if (batsman1 === batsman2) batsman1 = batsman2 = "";

    //title
    message += `*${title}*\n`;

    //first inning info
    message += firstInningRuns
      ? `\n${firstInningTeam + " - " + firstInningRuns}`
      : "";

    //current inning info
    message += `\n${score} ${runrate}`;

    //bowler and last wicket info | isInningOver (when inning over) - "out of gya" , "data not found" comes!
    message +=
      isInningOver || obj.info === "MO"
        ? ""
        : `\n\n🏏 ${batsman1} \n🏏 ${batsman2}\n
⚾ ${bowler} ${bowlerruns}-${bowlerwickets} (${bowlerover})
${batsman2 === "out ho gaya" ? "\nLast Wicket: " + lastwicket + "\n" : ""}
_recent balls_ \n${recentballs}`;

    //match update
    message +=
      currentInning === "Innings2" || isInningOver ? `\n\n${update}` : "";

    obj.message = message;
  } catch (err) {
    console.log(err);
    obj.message = err.toString();
    obj.info = "ER";
  }

  // console.log(obj);
  return obj;
};

// getCricketScore(66369);

// const getScoreCard = async (matchID) => {
  export async function getScoreCard(matchID) {
  try {
    let { data } = await axios.get(
      "https://cric-score.skdev.one/scorecard/" + matchID
    );
    let firstInningTeam = "",
      secondInningTeam = "",
      firstInningTeamScore = "",
      secondInningTeamScore = "";
    firstInningTeam = data.Innings1[2].team;
    firstInningTeamScore = data.Innings1[2].score;
    let message = `*${firstInningTeam} 🏏*\nscore: ${firstInningTeamScore}\n`;
    if (Object.keys(data.Innings2[2]).length) {
      secondInningTeam = data.Innings2[2].team;
      secondInningTeamScore = data.Innings2[2].score;
    }

    data.Innings1[0].Batsman.forEach((player) => {
      message += `\n${player.runs} (${player.balls}) : ${player.name}`;
      if (player.dismissal == "batting") message += `*`;
    });

    if (secondInningTeam) {
      message += `\n\n*${secondInningTeam} 🏏*\nscore: ${secondInningTeamScore}\n`;
      data.Innings2[0].Batsman.forEach((player) => {
        message += `\n${player.runs} (${player.balls}) : ${player.name}`;
        if (player.dismissal == "batting") message += `*`;
      });
    }
    // console.log(message);
    return message;
  } catch (err) {
    console.log(err);
    return err.toString();
  }
};