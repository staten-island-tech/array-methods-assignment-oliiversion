const fruityflags = [
    {
      name: "Gay",
      colors: "blue+green+white",
      meaning: "non-women+non-women",
      fruitylevel: "100%"
    },
    {
      name: "Lesbian",
      colors: "pink+orange+white",
      meaning: "nonmen+nonmen",
      fruitylevel: "100%"
    },
    {
      name: "Bisexual",
      colors: "blue+purple+pink",
      meaning: "anyone+other/samesex",
      fruitylevel: "50%"
    },
    {
      name: "Pansexual",
      colors: "yellow+pink+blue",
      meaning: "anyone+anyone",
      fruitylevel: "65%"
    },
    {
      name: "Asexual",
      colors: "purple+gray+white+black",
      meaning: "L+sex.",
      fruitylevel: "125%"
    },
  ];
  fruityflags.forEach((fruityflags) => console.log(fruityflags.name));

  fruityflags.forEach((fruityflags) => {
    fruityflags.fruitylevel.forEach(fruityflags.fruitylevel) > console.log(fruityflags.fruitylevel);
  });

  console.log(fruityflags);

  const result = fruityflags.filter((fruityflags) => (fruityflags.colors = "blue+green+white"));
  console.log(result);
  