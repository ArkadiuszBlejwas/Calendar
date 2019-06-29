export const getActualDate = () => {
    const today = new Date();
    const actualDate = today.toLocaleDateString("pl-pl");
    document.getElementById("actualDate").innerHTML = actualDate;
}

