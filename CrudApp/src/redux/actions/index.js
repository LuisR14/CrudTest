export const CreateData = (data) => {
    return {
      type: "Create",
      payload:data
    }
  }
export const UpdateData = (data) => {
    return {
      type: "Update",
      payload: {
       id:data.id,
       modelo : data.modelo
      }
    }
  }
export const DeleteData = (data) => {
    return {
      type: "Delete",
      payload: {
       id:data
      }
    }
  }