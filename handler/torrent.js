export default class TorrentClient {
  id = null;
  constructor(transmission) {
    this.client = transmission;
  }

  #handle_status(err, status) {
    if (err) {
      console.error(err);
      return false;
    }

    return status;
  }

  async download_from_file(file_name) {
    console.log(this.client.addFile);
    return await this.client.addFile(file_name, this.#handle_status);
  }
}
