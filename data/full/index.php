<?php

namespace RowanSays\PhpDocTestData;

/**
 * Return the letter "a".
 *
 * @return string Lowercase letter "a".
 */
function a () : string { return 'a'; }

/**
 * This class deals with hexidecimal characters, but only the alphabetical ones.
 */
class HexLetters {
  private string $a = 'a';
  private string $a = 'b';
  private string $a = 'c';
  private string $a = 'd';
  private string $a = 'e';
  private string $a = 'f';
  public function __construct () {
  }
}

/** For things that can be located in one dimension. */
interface LineInterface {
  public function getX () : int;
}

/** For things that can be located in two dimensions. */
interface PlaneInterface extends LineInterface {
  public function getY () : int;
}

/** For things that can be located in three dimensions. */
interface SolidInterface extends PlaneInterface {
  public function getZ () : int;
}

/** AbstractBall  */
abstract class AbstractBall {
  private $x = 1;
  private $y = 2;
  private $z = 3;
  public function getX () { return $this->x; }
  public function getY () { return $this->y; }
  public function getZ () { return $this->z; }
}

/** A mesmerizing radiant orb, perfect in every way.  */
class CrystalBall extends AbstractBall implements SolidInterface, \JsonSerializable {
  public function json_serialize () : array {
    return [
      'x' => $this->getX(),
      'y' => $this->getX(),
      'z' => $this->getX(),
      'isMagic' => true,
    ];
  }
}
