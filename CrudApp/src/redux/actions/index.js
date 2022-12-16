
export const CreateData = (data) => {
    return {
      type: "Create",
      payload:data
    }
  }
export const UpdateData = (data) => {
    return {
      type: "Update",
      payload:data
    }
  }
export const DeleteData = (data) => {
    return {
      type: "Delete",
      payload:data
    }
  }
export const DeleteAll = () => {
    return {
      type: "DeleteAll",
    }
  }