// You should implement your task here.

module.exports = function towelSort(matrix) {
    return !matrix || matrix.length == 0
        ? []
        : matrix.reduce(
              (rez, elem, index) =>
                  index % 2 == 0
                      ? rez.concat(elem)
                      : rez.concat(elem.reverse()),
              []
          );
};
