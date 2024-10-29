import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Slider,
  Typography,
} from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import PageNav from "../components/PageNav";
const TripBudgetCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [travelInfo, setTravelInfo] = useState({
    country: "",
    days: 0,
    persons: 0,
  });
  const [foodOptions, setFoodOptions] = useState({
    coffee: 0,
    alcoholicDrink: 0,
    fastFood: 0,
    restaurantMeal: 0,
  });
  const [foodBasePrices, setFoodBasePrices] = useState({
    coffee: 20,
    alcoholicDrink: 100,
    fastFood: 150,
    restaurantMeal: 300,
  });
  const [shoppingOptions, setShoppingOptions] = useState({
    mensClothing: 0,
    womensClothing: 0,
    additionalSpending: 1,
  });
  const [shoppingBasePrices, setShoppingBasePrices] = useState({
    mensClothing: 500,
    womensClothing: 600,
    additionalSpending: 0,
  });
  const [transportOptions, setTransportOptions] = useState({
    taxiRides: 0,
    publicTransport: 0,
  });
  const [transportBasePrices, setTransportBasePrices] = useState({
    taxiRides: 20,
    publicTransport: 5,
  });
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const foodTotal = Object.keys(foodOptions).reduce((sum, option) => {
        return sum + foodOptions[option] * foodBasePrices[option];
      }, 0);

      const shoppingTotal = Object.keys(shoppingOptions).reduce(
        (sum, option) => {
          return sum + shoppingOptions[option] * shoppingBasePrices[option];
        },
        0
      );

      const transportTotal = Object.keys(transportOptions).reduce(
        (sum, option) => {
          return sum + transportOptions[option] * transportBasePrices[option];
        },
        0
      );

      const total = foodTotal + shoppingTotal + transportTotal;
      setTotalBudget(total);
    };

    calculateTotal();
  }, [
    foodOptions,
    shoppingOptions,
    transportOptions,
    foodBasePrices,
    shoppingBasePrices,
    transportBasePrices,
  ]);

  const handleNextStep = () => {
    if (currentStep === 0) {
      if (
        travelInfo.country.trim() === "" ||
        travelInfo.days < 1 ||
        travelInfo.persons < 1
      ) {
        alert("Please fill in all fields correctly.");
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBackStep = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (setter) => (option, value) =>
    setter((prev) => ({ ...prev, [option]: value }));

  const handleBasePriceChange = (setter) => (option, value) =>
    setter((prev) => ({ ...prev, [option]: value }));

  const handleRestart = () => {
    setCurrentStep(0);
    setTravelInfo({ country: "", days: 0, persons: 0 });
    setFoodOptions({
      coffee: 0,
      alcoholicDrink: 0,
      fastFood: 0,
      restaurantMeal: 0,
    });
    setFoodBasePrices({
      coffee: 20,
      alcoholicDrink: 100,
      fastFood: 150,
      restaurantMeal: 300,
    });
    setShoppingOptions({
      mensClothing: 0,
      womensClothing: 0,
      additionalSpending: 1,
    });
    setShoppingBasePrices({
      mensClothing: 500,
      womensClothing: 600,
      additionalSpending: 0,
    });
    setTransportOptions({ taxiRides: 0, publicTransport: 0 });
    setTransportBasePrices({ taxiRides: 20, publicTransport: 5 });
    setTotalBudget(0);
  };
  return (
    <>
      <PageNav />
      <Box my={12}>
        <Typography variant="h3" sx={{color: 'white', mx: 'auto', width: 'fit-content', mb: 2}}>Trip Budget Calculator</Typography>
        <Container>
          <Card variant="outlined">
            <CardContent>
              {currentStep === 0 && (
                <>
                  <Typography variant="h6">
                    Step 1 - Travel Information
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1">
                    I want to plan my budget by...
                  </Typography>
                  <Box display="flex" mt={2}>
                    <Typography variant="h12">
                      Enter your Country/City
                    </Typography>
                  </Box>
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter a country location"
                    value={travelInfo.country}
                    onChange={(e) =>
                      setTravelInfo({ ...travelInfo, country: e.target.value })
                    }
                    className="mt-4 w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                  <Box display="flex" mt={4}>
                    <Box sx={{ flex: 1, pr: 2 }}>
                      <Typography variant="body1">Days of Stay</Typography>
                      <Slider
                        value={travelInfo.days}
                        onChange={(e, newValue) =>
                          setTravelInfo({ ...travelInfo, days: newValue })
                        }
                        min={0}
                        max={30}
                        valueLabelDisplay="auto"
                        sx={{ color: "rgb(79, 70, 229)", height: 10 }}
                      />
                    </Box>
                    <Box sx={{ flex: 1, pl: 2 }}>
                      <Typography variant="body1">Number of Persons</Typography>
                      <Slider
                        value={travelInfo.persons}
                        onChange={(e, newValue) =>
                          setTravelInfo({ ...travelInfo, persons: newValue })
                        }
                        min={0}
                        max={10}
                        valueLabelDisplay="auto"
                        sx={{ color: "rgb(79, 70, 229)", height: 10 }}
                      />
                    </Box>
                  </Box>
                  <Box display="flex" mt={4}>
                    <Button
                      variant="contained"
                      onClick={handleNextStep}
                      fullWidth
                      sx={{ bgcolor: "rgb(79, 70, 229)", color: "white" }}
                    >
                      CONTINUE &gt;
                    </Button>
                  </Box>
                </>
              )}

              {currentStep === 1 && (
                <>
                  <Typography variant="h6">Step 2 - Food</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1">
                    Per day I plan to have here...
                  </Typography>
                  <Box display="flex" flexWrap="wrap" mt={3}>
                    {Object.keys(foodOptions).map((option, index) => (
                      <Box key={index} sx={{ flex: "1 1 50%", padding: 1 }}>
                        <Typography variant="body1">
                          {option
                            .replace(/\b\w/g, (match) => match.toUpperCase())
                            .replace(/([A-Z])/g, " $1")}
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          mt={1}
                        >
                          <Slider
                            value={foodOptions[option]}
                            onChange={(e, newValue) =>
                              handleChange(setFoodOptions)(option, newValue)
                            }
                            min={0}
                            max={20}
                            valueLabelDisplay="auto"
                            sx={{
                              width: "80%",
                              flexGrow: 1,
                              color: "rgb(79, 70, 229)",
                              height: 10,
                            }}
                          />
                          <Typography color="text.secondary" sx={{ ml: 2 }}>
                            {(foodOptions[option] * foodBasePrices[option]).toFixed(2)} ₹
                          </Typography>
                        </Box>
                        <input
                          type="number"
                          placeholder={`Base price for ${option}`}
                          value={foodBasePrices[option]}
                          onChange={(e) => {
                            const newValue = Number(e.target.value);
                            handleBasePriceChange(setFoodBasePrices)(
                              option,
                              newValue
                            );
                          }}
                          className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                          min={0}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Box display="flex" mt={4}>
                    <Button
                      variant="outlined"
                      onClick={handleBackStep}
                      sx={{ flex: 1 }}
                    >
                      BACK
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNextStep}
                      sx={{
                        flex: 1,
                        bgcolor: "rgb(79, 70, 229)",
                        color: "white",
                        ml: 2,
                      }}
                    >
                      CONTINUE &gt;
                    </Button>
                  </Box>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <Typography variant="h6">Step 3 - Shopping</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1">
                    I plan to purchase here...
                  </Typography>
                  <Box display="flex" flexWrap="wrap" mt={3}>
                    {Object.keys(shoppingOptions).map((option, index) => (
                      <Box key={index} sx={{ flex: "1 1 50%", padding: 1 }}>
                        <Typography variant="body1">
                          {option
                            .replace(/\b\w/g, (match) => match.toUpperCase())
                            .replace(/([A-Z])/g, " $1")}
                        </Typography>
                        {index < 2 && (
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            mt={1}
                          >
                            <Slider
                              value={shoppingOptions[option]}
                              onChange={(e, newValue) =>
                                handleChange(setShoppingOptions)(
                                  option,
                                  newValue
                                )
                              }
                              min={0}
                              max={20}
                              valueLabelDisplay="auto"
                              sx={{
                                width: "80%",
                                flexGrow: 1,
                                color: "rgb(79, 70, 229)",
                                height: 10,
                              }}
                            />
                            <Typography color="text.secondary" sx={{ ml: 2 }}>
                              {(shoppingOptions[option] *
                                shoppingBasePrices[option]).toFixed(2)}{" "}
                              ₹
                            </Typography>
                          </Box>
                        )}
                        <input
                          type="number"
                          placeholder={`Base price for ${option}`}
                          value={shoppingBasePrices[option]}
                          onChange={(e) => {
                            const newValue = Number(e.target.value);
                            handleBasePriceChange(setShoppingBasePrices)(
                              option,
                              newValue
                            );
                          }}
                          className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                          min={0}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Box display="flex" mt={4}>
                    <Button
                      variant="outlined"
                      onClick={handleBackStep}
                      sx={{ flex: 1 }}
                    >
                      BACK
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNextStep}
                      sx={{
                        flex: 1,
                        bgcolor: "rgb(79, 70, 229)",
                        color: "white",
                        ml: 2,
                      }}
                    >
                      CONTINUE &gt;
                    </Button>
                  </Box>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <Typography variant="h6">Step 4 - Transport</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1">I will use...</Typography>
                  <Box display="flex" flexWrap="wrap" mt={3}>
                    {Object.keys(transportOptions).map((option, index) => (
                      <Box key={index} sx={{ flex: "1 1 50%", padding: 1 }}>
                        <Typography variant="body1">
                          {option
                            .replace(/\b\w/g, (match) => match.toUpperCase())
                            .replace(/([A-Z])/g, " $1")}
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          mt={1}
                        >
                          <Slider
                            value={transportOptions[option]}
                            onChange={(e, newValue) =>
                              handleChange(setTransportOptions)(
                                option,
                                newValue
                              )
                            }
                            min={0}
                            max={20}
                            valueLabelDisplay="auto"
                            sx={{
                              width: "80%",
                              flexGrow: 1,
                              color: "rgb(79, 70, 229)",
                              height: 10,
                            }}
                          />
                          <Typography color="text.secondary" sx={{ ml: 2 }}>
                            {(transportOptions[option] *
                              transportBasePrices[option]).toFixed(2)}{" "}
                            ₹
                          </Typography>
                        </Box>
                        <input
                          type="number"
                          placeholder={`Base price for ${option}`}
                          value={transportBasePrices[option]}
                          onChange={(e) => {
                            const newValue = Number(e.target.value);
                            handleBasePriceChange(setTransportBasePrices)(
                              option,
                              newValue
                            );
                          }}
                          className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                          min={0}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Box display="flex" mt={4}>
                    <Button
                      variant="outlined"
                      onClick={handleBackStep}
                      sx={{ flex: 1 }}
                    >
                      BACK
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNextStep}
                      sx={{
                        flex: 1,
                        bgcolor: "rgb(79, 70, 229)",
                        color: "white",
                        ml: 2,
                      }}
                    >
                      CONTINUE &gt;
                    </Button>
                  </Box>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <Typography variant="h6">Summary</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1">
                    Here’s your total budget:
                  </Typography>
                  <Typography variant="h5">{totalBudget.toFixed(2)} ₹</Typography>
                  {totalBudget > 0 && (
                    <Box mt={4}>
                      <Typography variant="h6">Detailed Spending:</Typography>
                      <Divider sx={{ my: 2 }} />
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                          <TableHead>
                            <TableRow>
                              <TableCell>Category</TableCell>
                              <TableCell align="right">Amount (₹)</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {/* Food Spending Details */}
                            {Object.keys(foodOptions).map((option) => {
                              const totalFoodSpending =
                                foodOptions[option] * foodBasePrices[option];
                              return totalFoodSpending > 0 ? (
                                <TableRow key={option}>
                                  <TableCell>
                                    {option
                                      .replace(/\b\w/g, (match) =>
                                        match.toUpperCase()
                                      )
                                      .replace(/([A-Z])/g, " $1")}
                                  </TableCell>
                                  <TableCell align="right">
                                    {totalFoodSpending.toFixed(2)} ₹
                                  </TableCell>
                                </TableRow>
                              ) : null;
                            })}

                            {/* Shopping Spending Details */}
                            {Object.keys(shoppingOptions).map((option) => {
                              const totalShoppingSpending =
                                shoppingOptions[option] *
                                shoppingBasePrices[option];
                              return totalShoppingSpending > 0 ? (
                                <TableRow key={option}>
                                  <TableCell>
                                    {option
                                      .replace(/\b\w/g, (match) =>
                                        match.toUpperCase()
                                      )
                                      .replace(/([A-Z])/g, " $1")}
                                  </TableCell>
                                  <TableCell align="right">
                                    {totalShoppingSpending.toFixed(2)} ₹
                                  </TableCell>
                                </TableRow>
                              ) : null;
                            })}

                            {/* Transport Spending Details */}
                            {Object.keys(transportOptions).map((option) => {
                              const totalTransportSpending =
                                transportOptions[option] *
                                transportBasePrices[option];
                              return totalTransportSpending > 0 ? (
                                <TableRow key={option}>
                                  <TableCell>
                                    {option
                                      .replace(/\b\w/g, (match) =>
                                        match.toUpperCase()
                                      )
                                      .replace(/([A-Z])/g, " $1")}
                                  </TableCell>
                                  <TableCell align="right">
                                    {totalTransportSpending.toFixed(2)} ₹
                                  </TableCell>
                                </TableRow>
                              ) : null;
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  )}
                  {/* Detailed Spending Summary */}
                  <Box display="flex" mt={4}>
                    <Button
                      variant="outlined"
                      onClick={handleBackStep}
                      sx={{ flex: 1 }}
                    >
                      BACK
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleRestart}
                      sx={{
                        flex: 1,
                        bgcolor: "rgb(79, 70, 229)",
                        color: "white",
                        ml: 2,
                      }}
                    >
                      Reset &gt;
                    </Button>
                  </Box>
                </>
              )}
            </CardContent>
            <Divider sx={{ my: 2 }} />
            {currentStep >= 1 && currentStep < 4 && (
              <Box
                my={2}
                ml={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">
                  Day(s): {travelInfo.days} | Person(s): {travelInfo.persons}
                </Typography>
                <Typography variant="h6" mr={2}>
                  Current Budget Total: {totalBudget.toFixed(2)} ₹
                </Typography>
              </Box>
            )}
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default TripBudgetCalculator;
