const getBooking = () => {
    const getLayers = localStorage.getItem("getLayers");
    if (getLayers) {
        return JSON.parse(getLayers);
    } else {
        return [];
    }
}


const addBookingSet = (layer) => {

    const layers = getBooking();
    const isExist = layers.find((Loyer)=>Loyer.id===layer.id);
    if(isExist) return alert('already added')
        layers.push(layer)
    localStorage.setItem("getLayers", JSON.stringify(layers))


}
export { addBookingSet, getBooking }