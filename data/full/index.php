<?php

namespace RowanSays\PhpDoc\Template\TestData;

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
