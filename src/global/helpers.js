export const limitString = (str, lengthStr) => {
    return str.length <= lengthStr ? str : `${str.substr(0, lengthStr)}...`;
  };

export const convertDate = (date) => {
    const dataObj = new Date(date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return dataObj.toLocaleDateString("ru", options);
  };