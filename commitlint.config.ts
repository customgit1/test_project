import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types"

export default {
    extends: ['@commitlint/config-conventional'],
    prompt: {
        messages: {
            skip: '跳过',
            maxSubjectLength: '请输入小于{{limit}}个字符的描述',
            minSubjectLength: '请输入大于{{limit}}个字符的描述',
            subjectFullStop: '请以点结尾',
            subjectCase: '请以{{expected}}格式输入',
            typeCase: '请以{{expected}}格式输入',
            typeEnum: '请输入{{enum}}中的一个',
            scopeEnum: '请输入{{enum}}中的一个',
        },
        questions: {
            type: {
                description: "请选择提交类型",
                enum: {
                    feat: {
                        description: "增加新功能",
                        title: "feat",
                    }
                }
            }
        },
        scope: {
            description:
                'What is the scope of this change (e.g. component or file name)',
        },
        subject: {
            description: 'Write a short, imperative tense description of the change',
        },
        body: {
            description: 'Provide a longer description of the change',
        },
    }
} as UserConfig;