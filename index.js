function updatemap() {
    console.log("updating map with real time data")

    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases= element.infected;
                if (cases>255) {
                    color="red"
                }
                 else {
                    color=`rgb(${cases},165,10)`
                }
                // MARK ON THE MAP
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude , latitude])
                    .addTo(map)

            });
        })
}
setInterval(updatemap, 2000);



