/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../entities/Mushroom'
import Hero from '../entities/Hero'

export default class extends Phaser.State {
  init () {}

  preload () {}

  create () {
    const bannerText = 'Phil Test'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40 
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.hero = new Hero({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY
    })

    this.game.add.existing(this.hero)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.hero, 32, 32)
    }
  }
}
