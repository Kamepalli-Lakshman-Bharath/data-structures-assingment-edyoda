function towerOfHanoi(num, src, target, auxiliary) {
  if (num > 0) {
    towerOfHanoi(num - 1, src, auxiliary, target);
    console.log(`Move disk ${num} from ${src} to ${target}`);
    towerOfHanoi(num - 1, auxiliary, target, src);
  }
}

const numDisks = 3;
towerOfHanoi(numDisks, "A", "C", "B");
