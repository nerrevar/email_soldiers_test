export interface IAdvertisement {
  title: string,
  text: string,
  button: {
    text: string,
    action: () => void,
  }
}
