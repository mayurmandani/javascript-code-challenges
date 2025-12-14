/* Abstraction — simplify complex behaviour Expose a simple API while hiding complex internal steps. */

class Database {
  constructor(conn) {
    this.conn = conn;
  }
  async save(record) {
    // internal complex Logic(transaction, retries) is hidden
    await this.conn.query('INSERT ...', [record]);
  }
}