var countProgramLanguage = 0;

function desenhar(context)
{
 var code1 = "";
 var code2 = "";
 var code3 = "";
 var codeString = [8];

 codeString[0] = "if (gidsetsize <= NGROUPS_SMALL)";
 codeString[1] = "group_info->blocks[0] = group_info->small_block;";
 codeString[2] = "else {";
 codeString[3] = "for (i = 0; i < nblocks; i++) {";
 codeString[4] = "gid_t *b;";
 codeString[5] = "b = (void *)__get_free_page(GFP_USER);";
 codeString[6] = "if (!b)";
 codeString[7] = "goto out_undo_partial_alloc;";

 context.fillStyle ="#48D1CC";
 context.rect(100,150,200,50);
 context.stroke();


 if(countProgramLanguage <  7)
 {
  code1 = codeString[countProgramLanguage];
 }
 else
 {
  countProgramLanguage = 0;
 }

 if(countProgramLanguage+1 < 7)
 {
  code2 = codeString[countProgramLanguage+1];
 }

 if(countProgramLanguage+2 < 7)
 {
  code3 = codeString[countProgramLanguage+2];
 }

 context.fillStyle ="#32CD32";
 context.font = '6pt Tahoma';
 context.fillText(code1,102,163);
 context.fillText(code2,102,173);
 context.fillText(code3,102,183);

 countProgramLanguage++;

};

module.exports = { desenhar };