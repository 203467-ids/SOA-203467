export class task {
    constructor(
      readonly id: number,
      readonly titulo: string,
      readonly descripcion: string,
      readonly estado: boolean,
      readonly created_at: string,
      readonly updated_at: string,
      readonly deleted_at: string,
    ) {
      // TODO document why this constructor is empty
    }
  }