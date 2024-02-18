import CONDITIONS from '../src/constants/Conditions';
import Cars from '../src/entities/Cars';

describe('Cars', () => {
  test('랜덤값에 따른 전진 여부', () => {
    // Arrange
    const RANDOM_NUMBERS = [0, 1, 3, 4, 5, 9];
    const POSITIONS = RANDOM_NUMBERS.map(number => (number >= CONDITIONS.progressRandomThreshold ? 1 : 0));
    const carsStr = 'pen, apple, car3, car4,car5,car6';
    const cars = new Cars(carsStr);
    cars.progress(RANDOM_NUMBERS);
    // Act
    const positions = cars.getPositions();
    // Assert
    expect(positions).toEqual(POSITIONS);
  });
});
