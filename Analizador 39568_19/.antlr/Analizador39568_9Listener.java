// Generated from c:/Users/Mati/Desktop/Analizador 39568_19/Analizador39568_9.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link Analizador39568_9Parser}.
 */
public interface Analizador39568_9Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(Analizador39568_9Parser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(Analizador39568_9Parser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#instruccionSimple}.
	 * @param ctx the parse tree
	 */
	void enterInstruccionSimple(Analizador39568_9Parser.InstruccionSimpleContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#instruccionSimple}.
	 * @param ctx the parse tree
	 */
	void exitInstruccionSimple(Analizador39568_9Parser.InstruccionSimpleContext ctx);
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#sentenciaSwitch}.
	 * @param ctx the parse tree
	 */
	void enterSentenciaSwitch(Analizador39568_9Parser.SentenciaSwitchContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#sentenciaSwitch}.
	 * @param ctx the parse tree
	 */
	void exitSentenciaSwitch(Analizador39568_9Parser.SentenciaSwitchContext ctx);
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#seccionCase}.
	 * @param ctx the parse tree
	 */
	void enterSeccionCase(Analizador39568_9Parser.SeccionCaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#seccionCase}.
	 * @param ctx the parse tree
	 */
	void exitSeccionCase(Analizador39568_9Parser.SeccionCaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#seccionDefault}.
	 * @param ctx the parse tree
	 */
	void enterSeccionDefault(Analizador39568_9Parser.SeccionDefaultContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#seccionDefault}.
	 * @param ctx the parse tree
	 */
	void exitSeccionDefault(Analizador39568_9Parser.SeccionDefaultContext ctx);
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#sentenciaAsignacion}.
	 * @param ctx the parse tree
	 */
	void enterSentenciaAsignacion(Analizador39568_9Parser.SentenciaAsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#sentenciaAsignacion}.
	 * @param ctx the parse tree
	 */
	void exitSentenciaAsignacion(Analizador39568_9Parser.SentenciaAsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#sentenciaOutput}.
	 * @param ctx the parse tree
	 */
	void enterSentenciaOutput(Analizador39568_9Parser.SentenciaOutputContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#sentenciaOutput}.
	 * @param ctx the parse tree
	 */
	void exitSentenciaOutput(Analizador39568_9Parser.SentenciaOutputContext ctx);
	/**
	 * Enter a parse tree produced by {@link Analizador39568_9Parser#constante}.
	 * @param ctx the parse tree
	 */
	void enterConstante(Analizador39568_9Parser.ConstanteContext ctx);
	/**
	 * Exit a parse tree produced by {@link Analizador39568_9Parser#constante}.
	 * @param ctx the parse tree
	 */
	void exitConstante(Analizador39568_9Parser.ConstanteContext ctx);
}