// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1f0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000200000000000000000000000000000000000000000004000400040404040407000000000000000000000000000000000000000000040004000400000000000000000000000000000404040406000000000004000400040004000000000000000000000004000004000000000000000400040004000400040000000000000900000800040002040300000004000204000000000000020400000000020404040301010105010101010101010101010101010105010101010101050101010101`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 . 2 . 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . . 2 . 2 . 2 . . . . . . . . . 
. . . . . 2 2 2 2 . . . . . . 2 . 2 . 2 . 2 . . . . . . . . . 
. . 2 . . 2 . . . . . . . 2 . 2 . 2 . 2 . 2 . . . . . . 2 . . 
. . 2 . . 2 . . . . 2 . . 2 . . . . . . . 2 . . . . . 2 2 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile9,myTiles.tile8,sprites.dungeon.greenOuterNorth0,sprites.dungeon.hazardWater,myTiles.tile1,myTiles.tile11,myTiles.tile10,myTiles.tile12], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`3c000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060000000000000000000000000000000000000000000000000000000000000300000000000000000000000003080800000000000000000000060606060000000000000000000300000000000300000000000000000003000000000000000000000000000000030000000800000000000000000000060606060000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000800000000000000000000060606060100000000000300000000000000000000000000030000000000000000000000000300000300000000000000000800000000000000000000060606060703030303030505050505050505050505050505050505050505050505050505050503050505050505050505050804040402`, img`
............................................................
......22222222222222222222222222222222222222222222222222....
......2222..................................................
......2222..................................................
........................................2............222....
......222..........2.....2.........2...............2...2....
......2222......................................2......2....
......2222......2.............2............2..2........2....
......2222222222............................2..........2...2
`, [myTiles.transparency16,myTiles.tile10,myTiles.tile12,sprites.dungeon.greenOuterNorth0,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava1,sprites.builtin.brick,myTiles.tile13,sprites.dungeon.floorLight2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
