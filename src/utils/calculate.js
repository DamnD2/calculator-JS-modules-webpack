export default function (operator, firstOperand, secondOperand, maxResultFieldLength) {
  const convertedFirstOperand = parseFloat(firstOperand);
  const convertedSecondOperand = parseFloat(secondOperand);
  let result = 0;

  switch (operator) {
    case '+': {
      result = convertedFirstOperand + convertedSecondOperand;
      break;
    }
    case '-': {
      result = convertedFirstOperand - convertedSecondOperand;
      break;
    }
    case '/': {
      result = convertedFirstOperand / convertedSecondOperand;
      break;
    }
    case '*': {
      result = convertedFirstOperand * convertedSecondOperand;
      break;
    }
    default:
        // do nothing
  }

  if (result <= 10 ** (-maxResultFieldLength) && result > 0) {
    return result.toExponential(4);
  } if (result >= 10 ** maxResultFieldLength || result <= (-10) ** (maxResultFieldLength - 1)) {
    return result.toExponential(4);
  } if (result.toString().length > maxResultFieldLength) {
    return result.toFixed(3);
  }
  return result;
}
