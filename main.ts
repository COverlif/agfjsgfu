scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (true) {
        tiles.setWallAt(location, true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
function NextLevel () {
    currentNevel += 1
    if (currentNevel == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (currentNevel == 2) {
        tiles.setTilemap(tilemap`level2`)
    }
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    NextLevel()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    tiles.setWallAt(location, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -100
    } else {
        info.changeLifeBy(-1)
    }
})
let currentNevel = 0
let mySprite: Sprite = null
NextLevel()
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
mySprite.setPosition(11, 87)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay += 500
info.setLife(3)
scene.cameraFollowSprite(mySprite)
