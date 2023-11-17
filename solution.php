<?php

define(
    'ARRAYNUMBER',
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
);

function calcsum(int $int1, int $int2)
{
    if ($int1 < 0 || $int2 < 0) {
        return -1;
    }
    $index1 = array_search($int1, ARRAYNUMBER);
    $index2 = array_search($int2, ARRAYNUMBER);
    if ($int1 < $int2) {
        $sum = 0;
        if ($index1 !== false && $index2 !== false) {
            for ($i = $index1; $i <= $index2; $i++) {
                $sum += ARRAYNUMBER[$i];
            }
        }
        if ($index1 === false && $index2 !== false) {
            foreach (ARRAYNUMBER as $key => $number) {
                if ($key > $index2) {
                    break;
                }
                if ($number > $int1) {
                    $sum += $number;
                }
            }
        }
        if ($index1 !== false && $index2 === false) {
            foreach (ARRAYNUMBER as $key => $number) {
                if ($number < $int2 && $key >= $index1) {
                    $sum += $number;
                }
            }
        }
        return $sum;
    }

    return 0;
}

print_r(calcsum(30, 37));
