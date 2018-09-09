const cp437_font:number[][] = [
  // [], // 0x00   0x00000000, 0x00000000 
  // [], // 0x01   0x7E8195B1, 0xB195817E 
  // [], // 0x02   0x7EFFEBCF, 0xCFEBFF7E 
  // [], // 0x03   0x0E1F3F7E, 0x3F1F0E00 
  // [], // 0x04   0x081C3E7F, 0x3E1C0800 
  // [], // 0x05   0x18BAFFFF, 0xFFBA1800 
  // [], // 0x06   0x10B8FCFF, 0xFCB81000 
  // [], // 0x07   0x0000183C, 0x3C180000 
  // [], // 0x08   0xFFFFE7C3, 0xC3E7FFFF 
  // [], // 0x09   0x003C6642, 0x42663C00 
  // [], // 0x0A   0xFFC399BD, 0xBD99C3FF 
  // [], // 0x0B   0x70F88888, 0xFD7F070F 
  // [], // 0x0C   0x004E5FF1, 0xF15F4E00 
  // [], // 0x0D   0xC0E0FF7F, 0x05050707 
  // [], // 0x0E   0xC0FF7F05, 0x05657F3F 
  // [], // 0x0F   0x995A3CE7, 0xE73C5A99 
  // [], // 0x10   0x7F3E3E1C, 0x1C080800 
  // [], // 0x11   0x08081C1C, 0x3E3E7F00 
  // [], // 0x12   0x002466FF, 0xFF662400 
  // [], // 0x13   0x005F5F00, 0x005F5F00 
  // [], // 0x14   0x060F097F, 0x7F017F7F 
  // [], // 0x15   0x40DABFA5, 0xFD590302 
  // [], // 0x16   0x00707070, 0x70707000 
  // [], // 0x17   0x8094B6FF, 0xFFB69480 
  // [], // 0x18   0x0004067F, 0x7F060400 
  // [], // 0x19   0x0010307F, 0x7F301000 
  // [], // 0x1A   0x0808082A, 0x3E1C0800 
  // [], // 0x1B   0x081C3E2A, 0x08080800 
  // [], // 0x1C   0x3C3C2020, 0x20202000 
  // [], // 0x1D   0x081C3E08, 0x083E1C08 
  // [], // 0x1E   0x30383C3E, 0x3E3C3830 
  // [], // 0x1F   0x060E1E3E, 0x3E1E0E06 
  // [], // ' '   0x00000000, 0x00000000 
  // [], // '!'   0x00065F5F, 0x06000000 
  // [], // '"'   0x00070700, 0x07070000 
  // [], // '#'   0x147F7F14, 0x7F7F1400 
  // [], // '$'   0x242E6B6B, 0x3A120000 
  // [], // '%'   0x46663018, 0x0C666200 
  // [], // '&'   0x307A4F5D, 0x377A4800 
  // [], // '''   0x04070300, 0x00000000 
  // [], // '('   0x001C3E63, 0x41000000 
  // [], // ')'   0x0041633E, 0x1C000000 
  // [], // '*'   0x082A3E1C, 0x1C3E2A08 
  // [], // '+'   0x08083E3E, 0x08080000 
  // [], // ','   0x0080E060, 0x00000000 
  // [], // '-'   0x08080808, 0x08080000 
  // [], // '.'   0x00006060, 0x00000000 
  // [], // '/'   0x6030180C, 0x06030100 
  [ 0x3E7F7159, 0x4D7F3E00 ], // '0'
  [ 0x40427F7F, 0x40400000 ], // '1'
  [ 0x62735949, 0x6F660000 ], // '2'
  [ 0x22634949, 0x7F360000 ], // '3'
  [ 0x181C1653, 0x7F7F5000 ], // '4'
  [ 0x27674545, 0x7D390000 ], // '5'
  [ 0x3C7E4B49, 0x79300000 ], // '6'
  [ 0x03037179, 0x0F070000 ], // '7'
  [ 0x367F4949, 0x7F360000 ], // '8'
  [ 0x064F4969, 0x3F1E0000 ], // '9'
  [], // ':'   0x00006666, 0x00000000 
  [], // ';'   0x0080E666, 0x00000000 
  [], // '<'   0x081C3663, 0x41000000 
  [], // '='   0x24242424, 0x24240000 
  [], // '>'   0x00416336, 0x1C080000 
  [], // '?'   0x02035159, 0x0F060000 
  [], // '@'   0x3E7F415D, 0x5D1F1E00 
  [], // 'A'   0x7C7E1313, 0x7E7C0000 
  [], // 'B'   0x417F7F49, 0x497F3600 
  [], // 'C'   0x1C3E6341, 0x41632200 
  [], // 'D'   0x417F7F41, 0x633E1C00 
  [], // 'E'   0x417F7F49, 0x5D416300 
  [], // 'F'   0x417F7F49, 0x1D010300 
  [], // 'G'   0x1C3E6341, 0x51737200 
  [], // 'H'   0x7F7F0808, 0x7F7F0000 
  [], // 'I'   0x00417F7F, 0x41000000 
  [], // 'J'   0x30704041, 0x7F3F0100 
  [], // 'K'   0x417F7F08, 0x1C776300 
  [], // 'L'   0x417F7F41, 0x40607000 
  [], // 'M'   0x7F7F0E1C, 0x0E7F7F00 
  [], // 'N'   0x7F7F060C, 0x187F7F00 
  [], // 'O'   0x1C3E6341, 0x633E1C00 
  [], // 'P'   0x417F7F49, 0x090F0600 
  [], // 'Q'   0x1E3F2171, 0x7F5E0000 
  [], // 'R'   0x417F7F09, 0x197F6600 
  [], // 'S'   0x266F4D59, 0x73320000 
  [], // 'T'   0x03417F7F, 0x41030000 
  [], // 'U'   0x7F7F4040, 0x7F7F0000 
  [], // 'V'   0x1F3F6060, 0x3F1F0000 
  [], // 'W'   0x7F7F3018, 0x307F7F00 
  [], // 'X'   0x43673C18, 0x3C674300 
  [], // 'Y'   0x074F7878, 0x4F070000 
  [], // 'Z'   0x47637159, 0x4D677300 
  [], // '['   0x007F7F41, 0x41000000 
  [], // backslash   0x0103060C, 0x18306000 
  [], // ']'   0x0041417F, 0x7F000000 
  [], // '^'   0x080C0603, 0x060C0800 
  [], // '_'
  [ 0x00000307, 0x04000000 ], // '`'
  [ 0x20745454, 0x3C784000 ], // 'a'
  [ 0x417F3F48, 0x48783000 ], // 'b'
  [ 0x387C4444, 0x6C280000 ], // 'c'
  [ 0x30784849, 0x3F7F4000 ], // 'd'
  [ 0x387C5454, 0x5C180000 ], // 'e'
  [ 0x487E7F49, 0x03020000 ], // 'f'
  [ 0x18BCA4A4, 0x787C0400 ], // 'g'
  [ 0x417F7F08, 0x047C7800 ], // 'h'
  [ 0x00447D7D, 0x40000000 ], // 'i'
  [ 0x60E08080, 0x7D7D0000 ], // 'j'
  [ 0x417F7F10, 0x386C4400 ], // 'k'
  [ 0x00417F7F, 0x40000000 ], // 'l'
  [ 0x7C7C1838, 0x1C7C7800 ], // 'm'
  [ 0x7C7C0404, 0x7C780000 ], // 'n'
  [ 0x387C4444, 0x7C380000 ], // 'o'
  [ 0x04FCF8A4, 0x243C1800 ], // 'p'
  [ 0x183C24A4, 0x78FC8400 ], // 'q'
  [ 0x447C784C, 0x041C1800 ], // 'r'
  [ 0x485C5454, 0x74240000 ], // 's'
  [ 0x00043E7F, 0x44240000 ], // 't'
  [ 0x3C7C4040, 0x3C7C4000 ], // 'u'
  [ 0x1C3C6060, 0x3C1C0000 ], // 'v'
  [ 0x3C7C7038, 0x707C3C00 ], // 'w'
  [ 0x446C3810, 0x386C4400 ], // 'x'
  [ 0x1CBCA0A0, 0x7C7C0000 ], // 'y'
  [ 0x4C64745C, 0x4C640000 ], // 'z'
  // [], // '['    0x08083E77, 0x41410000 
  // [], // '|'    0x00000077, 0x77000000 
  // [], // ']'    0x4141773E, 0x08080000 
  // [ 0x02030103, 0x02030100 ], // '~'
  // [ 0x70784C46, 0x4C787000 ], // 0x7F
  // [ 0x0E9F91B1, 0xFB4A0000 ], // 0x80
  // [ 0x3A7A4040, 0x7A7A4000 ], // 0x81
  // [ 0x387C5455, 0x5D190000 ], // 0x82
  // [ 0x02237555, 0x557D7B42 ], // 0x83
  // [ 0x21755454, 0x7D794000 ], // 0x84
  // [ 0x21755554, 0x7C784000 ], // 0x85
  // [ 0x20745757, 0x7C784000 ], // 0x86
  // [ 0x183CA4A4, 0xE4400000 ], // 0x87
  // [ 0x023B7D55, 0x555D1B02 ], // 0x88
  // [ 0x397D5454, 0x5D190000 ], // 0x89
  // [ 0x397D5554, 0x5C180000 ], // 0x8A
  // [ 0x01457C7C, 0x41010000 ], // 0x8B
  // [ 0x0203457D, 0x7D430200 ], // 0x8C
  // [ 0x01457D7C, 0x40000000 ], // 0x8D
  // [ 0x797D1612, 0x167D7900 ], // 0x8E
  // [ 0x70782B2B, 0x78700000 ], // 0x8F
  // [ 0x447C7C55, 0x55450000 ], // 0x90
  // [ 0x20745454, 0x7C7C5454 ], // 0x91
  // [ 0x7C7E0B09, 0x7F7F4900 ], // 0x92
  // [ 0x327B4949, 0x7B320000 ], // 0x93
  // [ 0x327A4848, 0x7A320000 ], // 0x94
  // [ 0x327A4A48, 0x78300000 ], // 0x95
  // [ 0x3A7B4141, 0x7B7A4000 ], // 0x96
  // [ 0x3A7A4240, 0x78784000 ], // 0x97
  // [ 0x9ABAA0A0, 0xFA7A0000 ], // 0x98
  // [ 0x01193C66, 0x663C1901 ], // 0x99
  // [ 0x3D7D4040, 0x7D3D0000 ], // 0x9A
  // [ 0x183C24E7, 0xE7242400 ], // 0x9B
  // [ 0x687E7F49, 0x43662000 ], // 0x9C
  // [ 0x2B2FFCFC, 0x2F2B0000 ], // 0x9D
  // [ 0xFFFF0909, 0x2FF6F8A0 ], // 0x9E
  // [ 0x40C088FE, 0x7F090302 ], // 0x9F
  // [ 0x20745455, 0x7D794000 ], // 0xA0
  // [ 0x00447D7D, 0x41000000 ], // 0xA1
  // [ 0x3078484A, 0x7A320000 ], // 0xA2
  // [ 0x38784042, 0x7A7A4000 ], // 0xA3
  // [ 0x7A7A0A0A, 0x7A700000 ], // 0xA4
  // [ 0x7D7D1931, 0x7D7D0000 ], // 0xA5
  // [ 0x00262F29, 0x2F2F2800 ], // 0xA6
  // [ 0x00262F29, 0x2F260000 ], // 0xA7
  // [ 0x30784D45, 0x60200000 ], // 0xA8
  // [ 0x38380808, 0x08080000 ], // 0xA9
  // [ 0x08080808, 0x38380000 ], // 0xAA
  // [ 0x4F6F3018, 0xCCEEBB91 ], // 0xAB
  // [ 0x4F6F3018, 0x6C76FBF9 ], // 0xAC
  // [ 0x0000007B, 0x7B000000 ], // 0xAD
  // [ 0x081C3622, 0x081C3622 ], // 0xAE
  // [ 0x22361C08, 0x22361C08 ], // 0xAF
  // [ 0xAA005500, 0xAA005500 ], // 0xB0
  // [ 0xAA55AA55, 0xAA55AA55 ], // 0xB1
  // [ 0xDDFFAA77, 0xDDAAFF77 ], // 0xB2
  // [ 0x000000FF, 0xFF000000 ], // 0xB3
  // [ 0x101010FF, 0xFF000000 ], // 0xB4
  // [ 0x141414FF, 0xFF000000 ], // 0xB5
  // [ 0x1010FFFF, 0x00FFFF00 ], // 0xB6
  // [ 0x1010F0F0, 0x10F0F000 ], // 0xB7
  // [ 0x141414FC, 0xFC000000 ], // 0xB8
  // [ 0x1414F7F7, 0x00FFFF00 ], // 0xB9
  // [ 0x0000FFFF, 0x00FFFF00 ], // 0xBA
  // [ 0x1414F4F4, 0x04FCFC00 ], // 0xBB
  // [ 0x14141717, 0x101F1F00 ], // 0xBC
  // [ 0x10101F1F, 0x101F1F00 ], // 0xBD
  // [ 0x1414141F, 0x1F000000 ], // 0xBE
  // [ 0x101010F0, 0xF0000000 ], // 0xBF
  // [ 0x0000001F, 0x1F101010 ], // 0xC0
  // [ 0x1010101F, 0x1F101010 ], // 0xC1
  // [ 0x101010F0, 0xF0101010 ], // 0xC2
  // [ 0x000000FF, 0xFF101010 ], // 0xC3
  // [ 0x10101010, 0x10101010 ], // 0xC4
  // [ 0x101010FF, 0xFF101010 ], // 0xC5
  // [ 0x000000FF, 0xFF141414 ], // 0xC6
  // [ 0x0000FFFF, 0x00FFFF10 ], // 0xC7
  // [ 0x00001F1F, 0x10171714 ], // 0xC8
  // [ 0x0000FCFC, 0x04F4F414 ], // 0xC9
  // [ 0x14141717, 0x10171714 ], // 0xCA
  // [ 0x1414F4F4, 0x04F4F414 ], // 0xCB
  // [ 0x0000FFFF, 0x00F7F714 ], // 0xCC
  // [ 0x14141414, 0x14141414 ], // 0xCD
  // [ 0x1414F7F7, 0x00F7F714 ], // 0xCE
  // [ 0x14141417, 0x17141414 ], // 0xCF
  // [ 0x10101F1F, 0x101F1F10 ], // 0xD0
  // [ 0x141414F4, 0xF4141414 ], // 0xD1
  // [ 0x1010F0F0, 0x10F0F010 ], // 0xD2
  // [ 0x00001F1F, 0x101F1F10 ], // 0xD3
  // [ 0x0000001F, 0x1F141414 ], // 0xD4
  // [ 0x000000FC, 0xFC141414 ], // 0xD5
  // [ 0x0000F0F0, 0x10F0F010 ], // 0xD6
  // [ 0x1010FFFF, 0x10FFFF10 ], // 0xD7
  // [ 0x141414FF, 0xFF141414 ], // 0xD8
  // [ 0x1010101F, 0x1F000000 ], // 0xD9
  // [ 0x000000F0, 0xF0101010 ], // 0xDA
  // [ 0xFFFFFFFF, 0xFFFFFFFF ], // 0xDB
  // [ 0xF0F0F0F0, 0xF0F0F0F0 ], // 0xDC
  // [ 0xFFFFFFFF, 0x00000000 ], // 0xDD
  // [ 0x00000000, 0xFFFFFFFF ], // 0xDE
  // [ 0x0F0F0F0F, 0x0F0F0F0F ], // 0xDF
  // [ 0x387C446C, 0x386C4400 ], // 0xE0
  // [ 0xFCFE2A2A, 0x3E140000 ], // 0xE1
  // [ 0x7E7E0202, 0x06060000 ], // 0xE2
  // [ 0x027E7E02, 0x7E7E0200 ], // 0xE3
  // [ 0x63775D49, 0x63630000 ], // 0xE4
  // [ 0x387C447C, 0x3C040400 ], // 0xE5
  // [ 0x80FE7E20, 0x203E1E00 ], // 0xE6
  // [ 0x0406027E, 0x7C060200 ], // 0xE7
  // [ 0x99BDE7E7, 0xBD990000 ], // 0xE8
  // [ 0x1C3E6B49, 0x6B3E1C00 ], // 0xE9
  // [ 0x4C7E7301, 0x737E4C00 ], // 0xEA
  // [ 0x30784A4F, 0x7D390000 ], // 0xEB
  // [ 0x183C243C, 0x3C243C18 ], // 0xEC
  // [ 0x98FC643C, 0x3E273D18 ], // 0xED
  // [ 0x1C3E6B49, 0x49000000 ], // 0xEE
  // [ 0x7E7F0101, 0x7F7E0000 ], // 0xEF
  // [ 0x2A2A2A2A, 0x2A2A0000 ], // 0xF0
  // [ 0x44445F5F, 0x44440000 ], // 0xF1
  // [ 0x40515B4E, 0x44400000 ], // 0xF2
  // [ 0x40444E5B, 0x51400000 ], // 0xF3
  // [ 0x000000FE, 0xFF010706 ], // 0xF4
  // [ 0x60E080FF, 0x7F000000 ], // 0xF5
  // [ 0x08086B6B, 0x08080000 ], // 0xF6
  // [ 0x24361236, 0x24361200 ], // 0xF7
  // [ 0x00060F09, 0x0F060000 ], // 0xF8
  // [ 0x00000018, 0x18000000 ], // 0xF9
  // [ 0x00000010, 0x10000000 ], // 0xFA
  // [ 0x103070C0, 0xFFFF0101 ], // 0xFB
  // [ 0x001F1F01, 0x1F1E0000 ], // 0xFC
  // [ 0x00191D17, 0x12000000 ], // 0xFD
  // [ 0x00003C3C, 0x3C3C0000 ], // 0xFE
  // [ 0x00000000, 0x00000000 ], // 0xFF
];
