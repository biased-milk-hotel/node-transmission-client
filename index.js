import Transmission from "transmission";
import TorrentClient from "./handler/torrent.js";

(async () => {
  //

  var transmission = new Transmission();
  try {
    const client = new TorrentClient(transmission);
    await client.download_from_file("sample.torrent");
  } catch (e) {
    console.log(e);
    debugger;
  }
  //   transmission.addFile("sample.torrent", function (err, arg) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log(arg);
  //     debugger;
  //   });

  // function getStatusType(type) {
  //   return transmission.statusArray[type];
  // }

  // transmission.get(1, function (err, result) {
  //   if (err) {
  //     throw err;
  //   }
  //   if (result.torrents.length > 0) {
  //     console.log("Name = " + result.torrents[0].name);
  //     console.log("Download Rate = " + result.torrents[0].rateDownload / 1000);
  //     console.log("Upload Rate = " + result.torrents[0].rateUpload / 1000);
  //     console.log("Completed = " + result.torrents[0].percentDone * 100);
  //     console.log("ETA = " + result.torrents[0].eta / 3600);
  //     console.log("Status = " + getStatusType(result.torrents[0].status));
  //   }
  // });

  //   transmission.active(function (err, result) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       for (var i = 0; i < result.torrents.length; i++) {
  //         console.log(result.torrents[i].id);
  //         console.log(result.torrents[i].name);
  //       }
  //     }
  //   });
  //
})();
