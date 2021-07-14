scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    [img`
        f f f . . . . f f f . . . . 
        f 4 4 f . . f 4 4 f . . . . 
        f b 4 4 f f 4 4 b f . . . . 
        f 3 b 4 4 e 4 b 3 f . 2 . . 
        f 2 2 2 2 2 2 2 2 2 2 . . . 
        f 2 4 4 4 2 4 2 4 f . 2 . 2 
        f 4 2 4 2 4 4 2 2 f 2 e f 2 
        2 2 4 2 2 5 5 4 2 f 2 2 2 2 
        2 2 2 2 2 2 4 2 4 2 . f 2 f 
        . 2 5 2 5 2 2 2 5 2 f 5 2 f 
        . 2 2 5 2 2 2 2 2 2 2 2 5 f 
        2 2 2 5 2 5 2 2 5 2 2 5 2 . 
        . 2 5 5 2 2 5 5 2 2 2 2 2 . 
        . 2 5 2 2 2 5 2 5 5 2 2 . . 
        `,img`
        . . . . . . . . . . . . . . 
        f f f . . . . f f f . . . . 
        f 4 4 f . . f 4 4 f . . . . 
        f b 4 4 f f 4 4 b f . . . . 
        f 2 b 4 4 e 4 b 3 f . 2 . . 
        f 2 2 2 2 2 2 2 2 2 2 . . . 
        f 2 2 4 2 4 4 2 4 f . 2 . . 
        f 2 5 2 2 2 4 2 2 2 2 f e . 
        f 2 2 2 2 2 2 2 2 5 2 4 f . 
        f 2 5 2 2 5 2 2 5 2 2 2 f . 
        2 2 2 2 2 2 2 5 2 2 2 5 f . 
        2 2 2 5 2 2 2 5 2 2 2 2 2 . 
        . 2 5 5 5 2 5 5 2 2 5 2 . . 
        . 2 2 2 5 2 2 2 5 5 2 2 . . 
        `,img`
        . . . . . . . . . . . . . . 
        f f f . . . . f f f . . . . 
        f 4 4 f . . f 4 4 f . . . . 
        f b 4 4 f f 4 4 b f . . . . 
        f 3 2 4 4 e 4 b 2 f . 2 . . 
        f 2 2 2 2 2 2 2 2 2 2 . . . 
        f 4 2 2 4 2 4 2 4 f . 2 . . 
        f 2 2 2 2 4 2 2 4 2 2 e f e 
        2 2 5 5 2 2 f 4 2 f 2 f 2 f 
        2 2 5 5 2 5 5 5 2 2 2 2 4 f 
        2 2 5 5 2 2 2 2 2 2 2 2 e f 
        5 2 2 5 2 2 5 2 5 5 2 5 f . 
        2 5 2 5 5 2 5 5 5 2 5 5 . . 
        . 5 2 5 2 5 5 5 2 2 5 . . . 
        `],
    200,
    true
    )
    Waterdroop = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (true) {
        tiles.setWallAt(location, true)
    }
    animation.runImageAnimation(
    mySprite,
    [img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `],
    500,
    true
    )
    ELPERRO = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == ELPERRO) {
        mySprite.vy = -200
    } else {
        mySprite.vy = -500
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        f f f . . . . f f f . . . . 
        f 4 4 f . . f 4 4 f . . . . 
        f b 4 4 f f 4 4 b f . . . . 
        f 3 b 4 4 e 4 b 3 f . 2 . . 
        f 2 2 2 2 2 2 2 2 2 2 . . . 
        f 4 4 4 4 4 4 4 4 f . 2 . . 
        f 4 f 4 4 4 4 f 4 f . e f e 
        f 4 4 f 4 4 f 4 4 f . f 4 f 
        f e 4 4 3 3 4 4 4 f . f 4 f 
        . f 4 4 4 4 4 4 e e f f 4 f 
        . f e 4 4 4 4 4 4 e e 4 e f 
        . f 4 4 4 4 4 e 4 4 f f f . 
        . f 4 f f f 4 f f 4 f . . . 
        . f f . . f f . . f f . . . 
        `],
    500,
    false
    )
    Waterdroop = 0
})
function NextLevel () {
    currentNevel += 1
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    if (currentNevel == 1) {
        tiles.setTilemap(tilemap`level1`)
        info.setLife(3)
    } else if (currentNevel == 2) {
        tiles.setTilemap(tilemap`level2`)
    } else {
        game.over(true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        mySprite2 = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, value)
        mySprite2.follow(mySprite, 30)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c . . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f b 3 b c 3 b c f b b c c c . 
            . c b b b b b b c f b c b c c . 
            . c b b b b b b c b b c b b c . 
            c b 1 b b b 1 b b b c c c b c . 
            c b b b b b b b b c c c c c . . 
            f b c b b b c b b b b f c . . . 
            f b 1 f f f 1 b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . c c . . c c . . . . . . . . 
            . . c 3 c c 3 c c c . . . . . . 
            . c b 3 b c 3 b c c c . . . . . 
            . c b b b b b b b b f f . . . . 
            c c b b b b b b b b f f . . . . 
            c b 1 b b b 1 b b c f f f . . . 
            c b b b b b b b b f f f f . . . 
            f b c b b b c b c c b b b . . . 
            f b 1 f f f 1 b f c c c c . . . 
            . f b b b b b b f b b c c . . . 
            c c f b b b b b c c b b c . . . 
            c c c f f f f f f c c b b c . . 
            . c c c . . . . . . c c c c c . 
            . . c c c . . . . . . . c c c c 
            . . . . . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c b 1 b b b 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Sorpresa = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 4 5 5 5 1 1 1 1 1 1 1 5 5 4 5 
            5 4 5 5 1 5 5 5 5 5 5 5 1 5 4 5 
            5 4 5 5 1 5 5 5 5 5 5 5 1 5 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 1 5 4 5 
            5 4 5 5 5 5 5 1 1 1 1 1 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Food)
        tiles.placeOnTile(Sorpresa, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        Sorpresa = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 4 5 5 5 1 1 1 1 1 1 1 5 5 4 5 
            5 4 5 5 1 5 5 5 5 5 5 5 1 5 4 5 
            5 4 5 5 1 5 5 5 5 5 5 5 1 5 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 1 5 4 5 
            5 4 5 5 5 5 5 1 1 1 1 1 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 1 5 5 5 5 5 5 4 5 
            5 4 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Food)
        tiles.placeOnTile(Sorpresa, value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (sprite.bottom < otherSprite.bottom) {
        otherSprite.destroy(effects.spray, 500)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    if (true) {
        tiles.setWallAt(location, true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -200
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
let Sorpresa: Sprite = null
let mySprite2: Sprite = null
let currentNevel = 0
let ELPERRO = 0
let Waterdroop = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    f f f . . . . f f f . . . . 
    f 4 4 f . . f 4 4 f . . . . 
    f b 4 4 f f 4 4 b f . . . . 
    f 3 b 4 4 e 4 b 3 f 2 . . . 
    f 2 2 2 2 2 2 2 2 2 . . . . 
    f 4 4 4 4 4 4 4 4 f 2 . . . 
    f 4 f 4 4 4 4 f 4 f . e f e 
    f 4 4 f 4 4 f 4 4 f . f 4 f 
    f e 4 4 3 3 4 4 4 f . f 4 f 
    . f 4 4 4 4 4 4 e e f f 4 f 
    . f e 4 4 4 4 4 4 e e 4 e f 
    . f 4 4 4 4 4 e 4 4 f f f . 
    . f 4 f f f 4 f f 4 f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(11, 87)
mySprite.ay += 500
info.setLife(3)
scene.cameraFollowSprite(mySprite)
NextLevel()
game.onUpdateInterval(5000, function () {
    if (Waterdroop == 1) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (3 > info.life()) {
        ELPERRO = 0
    }
})
