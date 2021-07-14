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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`3c000a00040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404050505040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050505040700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050505040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050505040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050505040000000100000006000000000100000000000600000000010000000006000000010000000006000000010000000000000600010000000000050505040101040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404050505020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202030303`, img`
............................................................
............................................................
............................................................
............................................................
............................................................
............................................................
............................................................
............................................................
............................................................
............................................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile7,sprites.dungeon.collectibleBlueCrystal,myTiles.tile8,myTiles.tile4,myTiles.tile9,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1f0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000300000000000000000000000000000000000000000005000500050505050509000000000000000000000000000000000000000000050005000500000000000000000000000500000505050508000000000005000500050005000000000000020000000005000005000000000000000500050005000500050000000000000200000600050003050400000005000305000000000000030500000000030505050401010107010101010101010101010101010107010101010101070101010101`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 . 2 . 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . . 2 . 2 . 2 . . . . . . . . . 
. . 2 . . 2 2 2 2 . . . . . . 2 . 2 . 2 . 2 . . . . . . . . . 
. . 2 . . 2 . . . . . . . 2 . 2 . 2 . 2 . 2 . . . . . . . . . 
. . 2 . . 2 . . . . 2 . . 2 . . . . . . . 2 . . . . . 2 2 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile4,myTiles.tile9,myTiles.tile8,sprites.dungeon.greenOuterNorth0,myTiles.tile10,sprites.dungeon.hazardWater,myTiles.tile1,myTiles.tile11], TileScale.Sixteen);
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
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
