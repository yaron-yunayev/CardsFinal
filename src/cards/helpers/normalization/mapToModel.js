const mapCardToModel = (card) => {
  if (!card) {
    console.error("Card is undefined");
    return {};
  }

  return {
    title: card.title || '',
    subtitle: card.subtitle || '',
    description: card.description || '',
    phone: card.phone || '',
    email: card.email || '',
    webUrl: card.web || '',
    imageUrl: (card.image && card.image.url) || '',
    imageAlt: (card.image && card.image.alt) || '',
    state: (card.address && card.address.state) || '',
    country: (card.address && card.address.country) || '',
    city: (card.address && card.address.city) || '',
    street: (card.address && card.address.street) || '',
    houseNumber: (card.address && card.address.houseNumber) || '',
    zip: (card.address && card.address.zip) || ''
  };
};

export default mapCardToModel;
