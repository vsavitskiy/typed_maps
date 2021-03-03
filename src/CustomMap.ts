export interface Mappable {
  renderMapMarker(): string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private infoWindow: google.maps.InfoWindow;

  constructor(node: Element, options: google.maps.MapOptions) {
    this.googleMap = new google.maps.Map(node, options);
    this.infoWindow = new google.maps.InfoWindow();
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      this.infoWindow.setContent(mappable.renderMapMarker());
      this.infoWindow.open(this.googleMap, marker);
    });
  }
}
