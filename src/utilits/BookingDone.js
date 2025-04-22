import toast from "react-hot-toast";

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
    const isExist = layers.find((Loyer) => Loyer.id === layer.id);
    if (isExist) return toast.error("Opps! Alredy booked")
    layers.push(layer)
    localStorage.setItem("getLayers", JSON.stringify(layers))


}

const cancleBooking = (id) => {
    const booking = getBooking();
    const removedBook = booking.filter((book)=> book.id !== id)
    localStorage.setItem("getLayers", JSON.stringify(removedBook))
  


}
export { addBookingSet, getBooking, cancleBooking}