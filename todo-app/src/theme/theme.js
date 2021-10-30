/**
 * UIテーマ用の設定ファイル
 */
import { extendTheme } from '@chakra-ui/react';

/**
 * アプリ全体に適用するグローバルなテーマを定義する。
 */
const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "orange.50",
                color: "gray.800",
            },
            p: {
                fontSize: { base: "md", md: "lg" },
                lineHeight: "tail"
            }
        }
    }
});

export default theme;