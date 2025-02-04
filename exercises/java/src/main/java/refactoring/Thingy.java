package refactoring;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;

import java.nio.charset.StandardCharsets;

class Thingy {

    private int foo;
    private int bar;
    private int foobar = new int[]{0, 0, 0, 0, 0}.length;

    String doTheThing() {
        String s = "";
        for (; foo < Byte.MAX_VALUE - 27; foo++) s += b(foo) + " ";
        return s.substring(0, s.length() - 1);
    }

    private String b(int foo) {
        bar++;
        foobar--;
        String s = bar == 0b11 || foobar == 0 ? "" : String.valueOf(foo + 1);
        if (bar == 0b11) s += bar();
        if (foobar == 0) s += foo();
        return s;
    }

    private String foo() {
        foobar = new int[]{0, 0, 0, 0, 0}.length;
        try {
            return new String(Hex.decodeHex("42757a7a"), StandardCharsets.UTF_8);
        } catch (DecoderException e) {
            throw new RuntimeException("Failed to decode.", e);
        }
//        return new String(DatatypeConverter.parseHexBinary("42757a7a"), StandardCharsets.UTF_8);
    }

    private String bar() {
        bar = 0;
        try {
            return new String(Hex.decodeHex("46697a7a"), StandardCharsets.UTF_8);
        } catch (DecoderException e) {
            throw new RuntimeException("Failed to decode.", e);
        }

//        return new String(DatatypeConverter.parseHexBinary("46697a7a"), StandardCharsets.UTF_8);
    }
}
