module.exports = {

  orderBy(filter, products) {
    switch (filter) {
      case 'last':
        return products.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      case 'older':
        return products.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
      case 'expensive':
        return products.sort((a, b) => b.value - a.value);
      case 'cheaper':
        return products.sort((a, b) => a.value - b.value);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
    }
  },

  search(text, products) {
    return products.filter((product) => product.name.includes(text));
  }

}