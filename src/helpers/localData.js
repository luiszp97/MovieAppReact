

export const localData = (data) => {

  const datos = localStorage.getItem('fav');

  if(!datos){

    const stringifyData = JSON.stringify([data]);
    localStorage.setItem('fav', stringifyData );

    return data;

  }else {

    const favItems = JSON.parse(localStorage.getItem('fav'));
    const existingFav = favItems.find(element => element.id === data.id);
    

    if(existingFav){

      const index = favItems.findIndex(element => element.id === data.id);
      favItems.splice(index, 1);

      localStorage.setItem('fav', JSON.stringify([...favItems]));

      return [...favItems]

    } else {

      const favs = JSON.parse(datos)
      const newData = [...favs, data]
      localStorage.setItem('fav', JSON.stringify(newData))

      return [...favItems]

    }
  }
   
}
