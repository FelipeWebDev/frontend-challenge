const FormatPrice = (valueInCents: number) => {
    return (valueInCents / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  };

  export default FormatPrice;